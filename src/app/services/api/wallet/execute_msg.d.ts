/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ExecuteMsg =
  | {
      poll_vote: {
        amount: Uint128;
        poll_id: number;
        vote: VoteOption;
        [k: string]: unknown;
      };
    }
  | {
      receive: Cw20ReceiveMsg;
    }
  | {
      stake: {
        amount: Uint128;
        days?: number | null;
        [k: string]: unknown;
      };
    }
  | {
      unstake: {
        amount: Uint128;
        days?: number | null;
        [k: string]: unknown;
      };
    }
  | {
      update_config: {
        owner?: string | null;
        [k: string]: unknown;
      };
    }
  | {
      update_stake: {
        amount: Uint128;
        from_days: number;
        to_days: number;
        [k: string]: unknown;
      };
    }
  | {
      upsert_share: {
        address: string;
        lock_amount?: Uint128 | null;
        lock_end?: number | null;
        lock_start?: number | null;
        weight: number;
        [k: string]: unknown;
      };
    }
  | {
      withdraw: {
        amount?: Uint128 | null;
        [k: string]: unknown;
      };
    };
/**
 * A thin wrapper around u128 that is using strings for JSON encoding/decoding, such that the full u128 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq.
 *
 * # Examples
 *
 * Use `from` to create instances of this and `u128` to get the value out:
 *
 * ``` # use cosmwasm_std::Uint128; let a = Uint128::from(123u128); assert_eq!(a.u128(), 123);
 *
 * let b = Uint128::from(42u64); assert_eq!(b.u128(), 42);
 *
 * let c = Uint128::from(70u32); assert_eq!(c.u128(), 70); ```
 */
export type Uint128 = string;
export type VoteOption = "yes" | "no";
/**
 * Binary is a wrapper around Vec<u8> to add base64 de/serialization with serde. It also adds some helper methods to help encode inline.
 *
 * This is only needed as serde-json-{core,wasm} has a horrible encoding for Vec<u8>
 */
export type Binary = string;

/**
 * Cw20ReceiveMsg should be de/serialized under `Receive()` variant in a ExecuteMsg
 */
export interface Cw20ReceiveMsg {
  amount: Uint128;
  msg: Binary;
  sender: string;
  [k: string]: unknown;
}
