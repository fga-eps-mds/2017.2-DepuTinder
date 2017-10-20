import { FETCH_PARLAMENTARIANS_DATA } from '../actions/fetchParlamentariansData';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_PARLAMENTARIANS_DATA:
      return action.payload.data.map((parlamentary) => {
        return [
          parlamentary.parlamentaryName,
          {
            'fields': {
              name: parlamentary.parlamentaryName,
              photoPath: parlamentary.parlamentaryPhotoPath,
              uf: parlamentary.parlamentaryUF,
              party: parlamentary.parlamentaryPoliticalParty,
            },
          },
        ];
      });
    default:
      return state;
  }
}
