import { ApiTransaction } from "@/app/services/transaction"
import { useMutation, useQueryClient, useQuery } from "react-query"

const QUERY_KEY =  'qkTransaction'


const Create = () => {
    const queryClient = useQueryClient()

    return useMutation(ApiTransaction.create, {
        onSuccess: () => {
            queryClient.invalidateQueries(QUERY_KEY)
        }
    })
}

const ListAll = () => {
    return useQuery([QUERY_KEY], () => ApiTransaction.listAll())
  }
  
  export const useTransaction = {
      Create,
      ListAll,
}