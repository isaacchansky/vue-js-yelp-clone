import superagent from 'superagent'

export const search = function ({ dispatch }, params) {
  dispatch('SEARCH', params)
  dispatch('LOADING', true)

  console.log('do the search', params)
  superagent
    .get('http://localhost:3000/search')
    .query({
      term: params.term,
      location: params.location
    })
    .end(function (err, res) {
      if (!err) {
        dispatch('LOADING', false)
        dispatch('SEARCH:RESULT', res.body)
      }
    })
}
