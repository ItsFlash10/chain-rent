use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK9obqgF1eYhu3mLozywW8phD5");

#[program]
pub mod nft_ownership {
    use super::*;
    /*
    we have a primary owner as well as a secondary owner
    primary owner is the lender of the NFT / Asset.

    TODO:
        The idea :
        either create a contract / asset ( or a token ).
        Whoever posesses that token will be considered
        as partial owner of the asset.

        secondary owner percetages can be boken down to max 10
        that creates 10 tokens ( representing the part owner of the assest )

    */
    pub fn distribute_profit(ctx: Context<DistributeProfit>, total_profit: u64) -> Result<()> {
        let ownership = &ctx.accounts.ownership;
        let primary_share = ownership.primary_share;
        let secondary_share = ownership.secondary_share;

        let primary_profit = total_profit * primary_share / 100;
        let secondary_profit = total_profit * secondary_share / 100;

        // transfer primary profit to the primary owner
        let ix = anchor_lang::solana_program::system_instruction::transfer(
            &ctx.accounts.user.key(),
            &ownership.primary_owner,
            primary_profit,
        );
        anchor_lang::solana_program::program::invoke(
            &ix,
            &[
                ctx.accounts.user.to_account_info(),
                ctx.accounts.ownership.to_account_info(),
            ],
        )?;

        // Distribute secondary profit among secondary owners
        let per_owner_profit = secondary_profit / ownership.secondary_owners.len() as u64;
        for owner in &ownership.secondary_owners {
            let ix = anchor_lang::solana_program::system_instruction::transfer(
                &ctx.accounts.user.key(),
                owner,
                per_owner_profit,
            );
            anchor_lang::solana_program::program::invoke(
                &ix,
                &[
                    ctx.accounts.user.to_account_info(),
                    ctx.accounts.system_program.to_account_info(),
                ],
            )?;
        }

        Ok(())
    }


    pub fn greet_caller(ctx: Context<GreetCaller>) -> Result<()> {
        let caller = &ctx.accounts.caller;
        msg!("Hello, {}!", caller.key()); // Log a greeting message with the caller's public key
        Ok(())
    }

}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 8 + 32 + 40 * 5)] // this is random for now
    pub ownership: Account<'info, Ownership>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub primary_owner: SystemAccount<'info>, // add primary_owner as a SystemAccount
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct DistributeProfit<'info> {
    #[account(mut)]
    pub ownership: Account<'info, Ownership>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

/*
test function
*/
#[derive(Accounts)]
pub struct GreetCaller<'info> {
    #[account(signer)]
    pub caller: AccountInfo<'info>,
}

#[account]
pub struct Ownership {
    pub primary_owner: Pubkey,
    pub secondary_owners: [Pubkey; 5],
    pub primary_share: u64,
    pub secondary_share: u64,
}
