import {CreateVoteRequest} from './create-vote-request';

export type AddToFavouriteRequest = Omit<CreateVoteRequest, "value">;