import { LoginSchema } from '@/FeatureLayer/Login'
import { SignupSchema } from '@/FeatureLayer/SignUp'

export interface StateSchema {
  login?: LoginSchema
  signup?: SignupSchema
}
