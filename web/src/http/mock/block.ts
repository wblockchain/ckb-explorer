import { BlockWrapper } from '../response/Block'
import { Response } from '../response/Response'
import { TransactionWrapper } from '../response/Transaction'

export const BlockData: Response<BlockWrapper> = {
  data: {
    id: 12,
    type: 'block',
    attributes: {
      block_hash: '0x97f982dd3149da69e05e8867ccebd84eebdddaf947cc2618a1dca7683eadeacd',
      number: 8897,
      transactions_count: 98,
      proposal_transactions_count: 150,
      uncles_count: 2,
      uncle_block_hashes: [
        '0xnj7982dd3149da69e05e8867ccebd84eebdddaf947cc2618a1dca7683eadekoi',
        '0xm87982dd3149da69e05e8867ccebd84eebdddaf947cc2618a1dca7683eadenj7',
      ],
      reward: 40,
      total_transaction_fee: 10,
      cell_consumed: 100,
      total_cell_capacity: 1000,
      miner_hash: '0x9873h2dd3149da69e05e8867ccebd84eebdddaf947cc2618a1dca7683ead2dw1',
      timestamp: 1553068833785,
      difficulty: '0x100',
      version: 0,
      nonce: 503529102265201399,
      proof: '0x1234567',
    },
  },
}

export const TransactionsData: Response<TransactionWrapper[]> = {
  meta: {
    total: 200,
  },
  data: [
    {
      id: 12,
      type: 'block_transaction',
      attributes: {
        transaction_hash: '0x3abd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae324',
        block_number: '770',
        block_timestamp: 1553068833785,
        transaction_fee: 666,
        version: 0,
        display_inputs: [
          {
            input_id: 101,
            address_hash: '0x3abd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae324',
            capacity: 100,
          },
          {
            input_id: 102,
            address_hash: '0xddbd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae323',
            capacity: 100,
          },
        ],
        display_outputs: [
          {
            output_id: 103,
            address_hash: '0x3abd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae324',
            capacity: 100,
          },
          {
            output_id: 104,
            address_hash: '0xddbd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae323',
            capacity: 100,
          },
        ],
      },
    },
    {
      id: 13,
      type: 'block_transaction',
      attributes: {
        transaction_hash: '0xmk8721e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae324',
        block_number: '770',
        block_timestamp: 1553068833785,
        transaction_fee: 666,
        version: 0,
        display_inputs: [
          {
            input_id: 101,
            address_hash: '0x3abd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae324',
            capacity: 100,
          },
          {
            input_id: 102,
            address_hash: '0xddbd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae323',
            capacity: 100,
          },
        ],
        display_outputs: [
          {
            output_id: 103,
            address_hash: '0x3abd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae324',
            capacity: 100,
          },
          {
            output_id: 104,
            address_hash: '0xddbd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae323',
            capacity: 100,
          },
        ],
      },
    },
    {
      id: 14,
      type: 'block_transaction',
      attributes: {
        transaction_hash: '0x3abd21e6e51674bb961bb4c5f3cee9faa5da30e64be10623dc1cef292cbae324',
        block_number: '770',
        block_timestamp: 1553068833785,
        transaction_fee: 666,
        version: 0,
        display_inputs: [
          {
            input_id: 101,
            address_hash: '0x3abd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae324',
            capacity: 100,
          },
          {
            input_id: 102,
            address_hash: '0xddbd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae323',
            capacity: 100,
          },
        ],
        display_outputs: [
          {
            output_id: 103,
            address_hash: '0x3abd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae324',
            capacity: 100,
          },
          {
            output_id: 104,
            address_hash: '0xddbd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae323',
            capacity: 100,
          },
        ],
      },
    },
    {
      id: 15,
      type: 'block_transaction',
      attributes: {
        transaction_hash: '0x3abd21e6e51674bb961bb565f3cee9faa5da30e64be10623dc1cef292cbae324',
        block_number: '770',
        block_timestamp: 1553068833785,
        transaction_fee: 666,
        version: 0,
        display_inputs: [
          {
            input_id: 101,
            address_hash: '0x3abd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae324',
            capacity: 100,
          },
          {
            input_id: 102,
            address_hash: '0xddbd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae323',
            capacity: 100,
          },
        ],
        display_outputs: [
          {
            output_id: 103,
            address_hash: '0x3abd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae324',
            capacity: 100,
          },
          {
            output_id: 104,
            address_hash: '0xddbd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae323',
            capacity: 100,
          },
        ],
      },
    },
  ],
}