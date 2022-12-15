import React from 'react'
import PropTypes from 'prop-types'

import '@/styles/global.css'
import '@gouvfr/dsfr/dist/dsfr/dsfr.min.css'
import '@gouvfr/dsfr/dist/core/core.min.css'
import '@gouvfr/dsfr/dist/utility/icons/icons-system/icons-system.min.css'
import '@gouvfr/dsfr/dist/utility/icons/icons-document/icons-document.min.css'
import '@gouvfr/dsfr/dist/utility/icons/icons-development/icons-development.min.css'
import '@gouvfr/dsfr/dist/utility/icons/icons-business/icons-business.min.css'
import '@gouvfr/dsfr/dist/utility/icons/icons-device/icons-device.min.css'
import '@gouvfr/dsfr/dist/utility/icons/icons-user/icons-user.min.css'

const App = ({Component, pageProps}) => (
  <React.StrictMode>
    <Component {...pageProps} />
  </React.StrictMode>
)

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default App
