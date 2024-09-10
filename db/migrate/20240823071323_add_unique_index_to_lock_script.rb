class AddUniqueIndexToLockScript < ActiveRecord::Migration[7.0]
  def up
    # set 1 hour
    execute "SET statement_timeout = 3600000"

    remove_index :lock_scripts, :script_hash
    add_index :lock_scripts, :script_hash, unique: true
  end

  def down
    execute "RESET statement_timeout"
  end
end