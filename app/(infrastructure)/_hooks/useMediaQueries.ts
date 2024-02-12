import { useMediaQuery } from '@mui/material'

interface IMedaQueries {
  isMobile: boolean
}

const useMediaQueries = (): IMedaQueries => {
  const isMobile = useMediaQuery('(max-width:769px)')

  return {
    isMobile
  }
}

export default useMediaQueries
