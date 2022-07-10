import React from "react"
import useCreateGame from "../../../hooks/useCreateNewGame"
import { GAME_FACTORY_ADDRESS } from "../../../constants"
import GameFactoryAbi from "../../../abis/game_factory_abi.json"
import { Abi } from "starknet"
import { useStarknetInvoke, useContract, useStarknet } from "@starknet-react/core"
const CreateNewGameButton: React.FC = () => {
  const { contract } = useContract({ abi: GameFactoryAbi as Abi, address: GAME_FACTORY_ADDRESS })
  const {account} = useStarknet()
  const { data, loading, error, reset, invoke } = useStarknetInvoke({ contract, method: "deploy_new_game" });

  const createNewGame =  async () => {

    if (error) {
      return error
    }
    else {
      await invoke({args: [account], metadata: ""});
      console.log(data)
      return {
        loading: loading,
        data: data
      }
    }  }
  return (
    <>
      <button style={{height: 50, width: 100}} onClick={() => createNewGame()}>Create New Game</button>
    </>
  )
}

export default CreateNewGameButton