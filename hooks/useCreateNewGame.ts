import { useContract, useStarknet, useStarknetInvoke } from "@starknet-react/core";
import { useEffect } from "react";
import { Abi, ContractInterface } from "starknet";

interface UseContractArgs {
  abi?: Abi;
  address?: string;
}
const useCreateGame = ({ abi, address }: UseContractArgs) => {
  const { contract } = useContract({ abi, address })


    const { data, loading, error, reset, invoke } = useStarknetInvoke({ contract, method: "start_new_game" });

    if (error) {
      return error
    }
    else {
      invoke({args: [], metadata: ""});
      return {
        loading: loading,
        data: data
      }
    }


}

export default useCreateGame