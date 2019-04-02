class CreateLockScripts < ActiveRecord::Migration[5.2]
  def change
    create_table :lock_scripts do |t|
      t.binary :args
      t.binary :binary
      t.binary :reference
      t.binary :signed_args
      t.integer :version
      t.belongs_to :cell_output, index: true
      t.belongs_to :account, index: true

      t.timestamps
    end
  end
end