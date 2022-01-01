import { axiosClient } from '../../../http/Clients';
import { TDices } from './types';

const URL = `/dices`;

export const rollDicesFetch = async () => (await axiosClient.get<TDices>(URL)).data;
