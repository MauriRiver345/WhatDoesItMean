export interface Translation {
  responseData: ResponseData
  quotaFinished: boolean
  mtLangSupported: null
  responseDetails: string
  responseStatus: number
  responderId: null
  exception_code: null
  matches: Match[]
}

export interface Match {
  id: number
  segment: string
  translation: string
  source: string
  target: string
  quality: number
  reference: string
  "usage-count": number
  subject: boolean
  "created-by": string
  "last-updated-by": string
  "create-date": Date
  "last-update-date": Date
  match: number
  penalty: null
  model: string
}

export interface ResponseData {
  translatedText: string
  match: number
}
