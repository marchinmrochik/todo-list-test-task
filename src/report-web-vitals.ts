import { ReportHandler } from 'web-vitals'

const reportWebVitals = async (onPerfEntry?: ReportHandler): Promise<void> => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    try {
      const {
        getCLS,
        getFID,
        getFCP,
        getLCP,
        getTTFB,
      } = await import('web-vitals')

      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    } catch (error) {
      // Handle import or other errors if needed
      console.error('Error importing web-vitals:', error)
    }
  }
}

export default reportWebVitals
