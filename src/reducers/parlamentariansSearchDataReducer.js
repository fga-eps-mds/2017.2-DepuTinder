import { FETCH_PARLAMENTARIANS_DATA } from '../actions/fetchParlamentariansData';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_PARLAMENTARIANS_DATA:
      return action.payload.data.map((parlamentary) => {
        return [
          parlamentary.parlamentaryName,
          {
            parlamentaryName: parlamentary.parlamentaryName,
            parlamentaryPhotoPath: parlamentary.parlamentaryPhotoPath,
            parlamentaryUf: parlamentary.parlamentaryUF,
            parlamentaryPoliticalParty: parlamentary.parlamentaryPoliticalParty,
          },
        ];
      });
    default:
      return state;
  }
}
