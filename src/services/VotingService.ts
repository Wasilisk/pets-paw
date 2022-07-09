/*node-modules*/
import {AxiosResponse} from 'axios';

/*http*/
import $api from '../http';

/*models*/
import {CreateVoteRequest} from '../models/request';
import {Vote} from '../models/common';


export class VotingService {
    static async createVote(data: CreateVoteRequest): Promise<AxiosResponse<void>> {
        return $api.post('votes', data);
    }

    static async getUserVotes(subId: string): Promise<AxiosResponse<[Vote]>> {
        return $api.get(`votes?sub_id=${subId}`);
    }
}