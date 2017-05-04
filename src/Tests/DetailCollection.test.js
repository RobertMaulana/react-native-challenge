import React from 'react'
import { shallow } from 'enzyme'

import DetailCollection from '../components/DetailCollection'

describe('<DetailCollection />', () => {
  it('should render correctly', () => {
    const detail = shallow(
      <DetailCollection navigation={{
          state: {
            params: { collection: {} }
          }
      }} />
    )
    expect(detail).toMatchSnapshot()
  })
})
