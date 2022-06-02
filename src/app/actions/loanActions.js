export const Types = {
    loan: 'loan/LOAN',
    return: 'return/RETURN'
};

export const Creators = {
    loan: (loan) => ({
        type:  Types.loan,
        loan
    }),
    return: (loan) => ({
        type: Types.return,
        loan
    })
}

