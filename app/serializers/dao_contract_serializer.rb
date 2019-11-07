class DaoContractSerializer
  include FastJsonapi::ObjectSerializer
  set_type :dao
  attributes :total_deposit, :subsidy_granted, :deposit_transactions_count, :withdraw_transactions_count,
             :depositors_count, :total_depositors_count
end