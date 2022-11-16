import {Table,TableReq} from '@/types/base'

export interface Msg{
    queueId: number
    storeSize: number
    queueOffset: number
    sysFlag: number
    bornTimestamp: number
    bornHost: string
    storeTimestamp: number
    storeHost: string
    msgId: string
    commitLogOffset: number
    bodyCRC: number
    reconsumeTimes: number
    preparedTransactionOffset: number
    topic: string
    flag: number
    properties: Properties
    messageBody: string
}

export interface Properties {
    MIN_OFFSET: number
    MAX_OFFSET: number
    UNIQ_KEY: string
    CLUSTER: string
} 

export interface MsgTable extends Table{
    list: Msg[]
}