/**
 * @author Rafael Fernandes Silva
 * 10/01/2019
 *  Mock para autenticação de usuário SISBR usando CAS + API Manager
 *
 * Dependencias:
 *  json-server -> npm install -g json-server
 *
 * Usage: node mock.js
 *  Inicia um servidor node provendo o mock
 */
const jsonServer = require('json-server')
const server = jsonServer.create();
const router = jsonServer.router('mock/rest-mock.json');
const middlewares = jsonServer.defaults();

const accessToken = "80aaadc2-1a94-339a-b776-2ca499469a19";
const refreshToken = "8de29471-c1e0-3f58-ac44-2fb62ff7f0ce";
const JWT = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiZXdvZ0luVnpkV0Z5YVc4aU9pQjdDaUFnSW14dloybHVJam9nSWtkRlFWSlJRekF6TURCZk1EQWlMQW9nSUNKdWIyMWxJam9nSWxWVFZVRlNTVThnUTA5U1VFOVNRVlJKVms4Z1JFRWdSMFZCVWxFaUxBb2dJQ0pqY0dZaU9pQWlOakkyTmpNMU1qSTNNeklpTEFvZ0lDSmxiV0ZwYkNJNklDSmhaMjVsYkdsMGJ5NWpZVzVuWlhKaGJtRkFjMmxqYjI5aUxtTnZiUzVpY2lJc0NpQWdJbTUxYldWeWIwTnZiM0JsY21GMGFYWmhJam9nTXpBd0xBb2dJQ0pwWkVsdWMzUnBkSFZwWTJGdlQzSnBaMlZ0SWpvZ01pd0tJQ0FpYVdSVmJtbGtZV1JsU1c1emRFOXlhV2RsYlNJNklEQXNDaUFnSW1SaGRHRkliM0poVld4MGFXMXZURzluYVc0aU9pQXhOVFl6TnprM01UYzVOREU1TEFvZ0lDSndaWEp0YVhOemIyVnpJam9nZXdvZ0lDQWdJQ0FpYzJsemRHVnRZWE1pT2lCYkNpQWdJQ0FnSUNBZ0lDQjdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0ltbGtJam9nTVRnNE5pd0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBaWJtOXRaU0k2SUNKUVQxSlVRVXdnTXk0d0lpd0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBaWMybG5iR0VpT2lBaVVGSlVNeTR3SWl3S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FpYlc5a2RXeHZjeUk2SUZzS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2V3b2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSW1sa0lqb2dNVGt4TXl3S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0p1YjIxbElqb2dJbEJQVWxSQlRDQXpMakFpTEFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJbVp2Y20xMWJHRnlhVzhpT2lBaVVFOVNWRUZNSURNdU1DSXNDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBaWRHbHdieUk2SUNKUVQxSlVRVXdpTEFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJbTlpYW1WMGIzTWlPaUJiQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZXdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWlibTl0WlNJNklDSk5UbFZRVWtsT1EwbFFRVXdpTEFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWlkR2x3YnlJNklDSk5SVTVWSWl3S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJbVJsYzJOeWFXTmhieUk2SUNKTlRsVlFVa2xPUTBsUVFVd2lMQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBaWJHRmlaV3dpT2lBaVNHOXRaU0lzQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDSnBZMjl1WlNJNklDSnRaR2t0YUc5dFpTMWphWEpqYkdVaUxBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FpWTJGdGFXNW9ieUk2SUNJdklpd0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSW5OMVlrOWlhbVYwYjNNaU9pQmJDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSW01dmJXVWlPaUFpVFU1VlNVNVVSVkpPVHpFaUxBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0owYVhCdklqb2dJazFGVGxVaUxBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0prWlhOamNtbGpZVzhpT2lBaVRVNVZTVTVVUlZKT1R6RWlMQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNKc1lXSmxiQ0k2SUNKTlpXNTFJREVpTEFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDSnBZMjl1WlNJNklDSnRaR2t0WW1GdWF5SXNDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSW1OaGJXbHVhRzhpT2lBaUwzSnZkR0V4SWl3S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWljM1ZpVDJKcVpYUnZjeUk2SUZzS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZXdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0ltNXZiV1VpT2lBaVJrNURRMDlPVTFWTVZFRlNUMVJCTVNJc0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWlkR2x3YnlJNklDSkdWVTVEU1U5T1FVeEpSRUZFUlNJc0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWljM1ZpVDJKcVpYUnZjeUk2SUZzS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I3Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNKdWIyMWxJam9nSWxKRFUwTlBUbE5WVEZSQlVsSlBWRUV4SWl3S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0luUnBjRzhpT2lBaVVrVkRWVkpUVHlJS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCZENpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwc0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhzS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDSnViMjFsSWpvZ0lrWk9RMGxPUTB4VlNWSlNUMVJCTVNJc0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWlkR2x3YnlJNklDSkdWVTVEU1U5T1FVeEpSRUZFUlNJc0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWljM1ZpVDJKcVpYUnZjeUk2SUZzS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I3Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNKdWIyMWxJam9nSWxKRFUwbE9RMHhWU1ZKU1QxUkJNU0lzQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNKMGFYQnZJam9nSWxKRlExVlNVMDhpQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmUW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWFFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hRb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTd0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIc0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FpYm05dFpTSTZJQ0pOVGxWSlRsUkZVazVQTWlJc0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJblJwY0c4aU9pQWlUVVZPVlNJc0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJbVJsYzJOeWFXTmhieUk2SUNKTlRsVkpUbFJGVWs1UE1pSXNDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSW14aFltVnNJam9nSWsxbGJuVWdNaUlzQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0ltbGpiMjVsSWpvZ0ltMWthUzFvYjIxbExYWmhjbWxoYm5RaUxBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0pqWVcxcGJtaHZJam9nSWk5eWIzUmhNaUlzQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0luTjFZazlpYW1WMGIzTWlPaUJiQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSHNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNKdWIyMWxJam9nSWtaT1EwTlBUbE5WVEZSQlVrOVVRVElpTEFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0luUnBjRzhpT2lBaVJsVk9RMGxQVGtGTVNVUkJSRVVpQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBzQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSHNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNKdWIyMWxJam9nSWtaT1EwVllRMHhWU1ZKU1QxUkJNaUlzQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBaWRHbHdieUk2SUNKR1ZVNURTVTlPUVV4SlJFRkVSU0lzQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBaWMzVmlUMkpxWlhSdmN5STZJRnNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0p1YjIxbElqb2dJbEpEVTBWWVEweFZTVkpTVDFSQk1pSXNDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0owYVhCdklqb2dJbEpGUTFWU1UwOGlDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZRb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYUW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWFFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmRDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmUW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hRb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlDaUFnSUNBZ0lDQWdJQ0FnSUNBZ1hRb2dJQ0FnSUNBZ0lDQWdmUW9nSUNBZ0lDQmRMQW9nSUNBZ0lDQWlhVzUwWldkeVlXTnZaWE1pT2lCYkNpQWdJQ0FnSUNBZ2V3b2dJQ0FnSUNBZ0lDQWdJbTV2YldVaU9pQWlkSEpoYm5ObVpYSmxibU5wWVY5aVlXNWpZWEpwWVNJc0NpQWdJQ0FnSUNBZ0lDQWlkR2x3YnlJNklDSlNSVU5WVWxOUElnb2dJQ0FnSUNBZ0lIMEtJQ0FnSUNBZ1hRb2dJQ0FnZlFvZ0lIMEtmUT09IiwiaWF0IjoxNTYzODIxMzQ0LCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAiLCJpc3MiOiJodHRwczovL2JvdGkuc2lzYnIuY29vcC5iciIsInN1YiI6ImdlYXJxYzAzMDBfMDAifQ.0vlWzIUd1LpVbKnsr6t2Nt2pElo_QwWsHC6Uk5X_Yj9437fEUknkaEMwmIszf_ImAjkVHUYv5ghwsGQeoFr1pMEujGCCvb2SAp6NgTsLTAX09H5Ji23PXRnYZ_fQiq5moBrvcE5u5MkRdyXxAkm9o6gVJQsz-L__Ov7s9OQ4nBVO-yI-DYsKJt0oy1wOxsxOU-9n-OjQcHGOksGthbcL4A7T9JNxA1t5wxRVKaHx0hqLPbSz773ah5b7vKQ99gwFMROiHZ3BdQqBYKljEv5SmRXy_9CvR0F5AHgQqNbJdz-7iHwLmBnbRDNq3vBh99r3oU_tW1Ldc23w-0giu1s1mg";

/** variables RHSSO IDP */
const code = "651d1e7f-d086-4e3d-abe6-19dcbdcbbe63.6504f322-efa0-4c28-97b7-dd355fc5a9d1.c3aa9e27-0cbb-43eb-8414-4a4a7cda9b5c";
const JWT_AcessToken_RHSSO = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkwtNnQtajI2LTBDN3pVODVKbWdyUDNUZ2oxY1VRSWRRa0IzcmRUNVpKRWcifQ.eyJpYXQiOjE3MDEwOTUxOTgsImF1dGhfdGltZSI6MTcwMTA5NTE3OCwianRpIjoiMjBjNjQxZDgtMTZlMi00MjcxLTlmZjAtNTE1NGE4NGU2YjFlIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJjZTdjOTdlLThhZjctNDg5Zi1hMjk4LTlkM2UzZDkzMDhjNiIsInR5cCI6IkJlYXJlciIsImF6cCI6InNpc2JyMy1mcm9udGVuZCIsInNlc3Npb25fc3RhdGUiOiJjNTFjMzRmMC05ZTM0LTQ5ZTAtYjg0Ny05MDA0NzgxZTk3ZWEiLCJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtc2lzYnIiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsInNpZCI6ImM1MWMzNGYwLTllMzQtNDllMC1iODQ3LTkwMDQ3ODFlOTdlYSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiYXBsaWNhY2FvIjoiYzJselluSXpMV1p5YjI1MFpXNWsiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJnZWFycWMwMzAwXzAwIiwiaWQiOiJnZWFycWMwMzAwXzAwIn0.jAb3t0XrT_feoTQjyIXlBjHjFAGCvf8dOsqOJojoKKXWk9vSrIa4LG02gVEMb61GAS3PTMQpbPNgv_PVarRY6hhW5n-3j4e-j1JqSsq1yj6Sxt_I9rG6no3UKARE8ff5vmQYL9HYUb2LNLcCPrDyweIsT8jtvn2c9YO4sAw7pCk2xX36o-YzYeKk79AcBDoWTZp57zpQ7aQsbyKteqPyFtvbC3s2Oc6JrfNeOoEgx8ulQHtIi23A2TeR2Z6Dxzt5uJHj-_3EHDtUwF-n46-xwSIIY23UgCKNdWZbPSMtAlO-AxuIcxfmnXxdcxS2pN2rlT4QF5OTcxPFMz8LkMFlRA";
const id_token_RHSSO = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJMLTZ0LWoyNi0wQzd6VTg1Sm1nclAzVGdqMWNVUUlkUWtCM3JkVDVaSkVnIn0.eyJleHAiOjE3MDEwOTg3ODksImlhdCI6MTcwMTA5NTE5OCwiYXV0aF90aW1lIjoxNzAxMDk1MTc4LCJqdGkiOiJjZGEwMzYxZS02MmNkLTQ3ZTUtOTRiMC04NDQ3Y2E0NzJhMGIiLCJpc3MiOiJodHRwczovL2lkcC1zaXNici10aS5ob21vbG9nYWNhby5jb20uYnIvYXV0aC9yZWFsbXMvc2lzYnIiLCJhdWQiOiJzaXNicjMtZnJvbnRlbmQiLCJzdWIiOiIyY2U3Yzk3ZS04YWY3LTQ4OWYtYTI5OC05ZDNlM2Q5MzA4YzYiLCJ0eXAiOiJJRCIsImF6cCI6InNpc2JyMy1mcm9udGVuZCIsInNlc3Npb25fc3RhdGUiOiJjNTFjMzRmMC05ZTM0LTQ5ZTAtYjg0Ny05MDA0NzgxZTk3ZWEiLCJhdF9oYXNoIjoiS0xueTlIaFFuanR4Vmk3UVdaamYwZyIsImFjciI6IjAiLCJzaWQiOiJjNTFjMzRmMC05ZTM0LTQ5ZTAtYjg0Ny05MDA0NzgxZTk3ZWEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImFwbGljYWNhbyI6ImMybHpZbkl6TFdaeWIyNTBaVzVrIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiZ2VhcnFjMDMwMF8wMCIsImlkIjoiZ2VhcnFjMDMwMF8wMCJ9.P9RVc0FUoASNTEiOamBw3NJ0UnMakWD38AYlOqt6dw6Q_k0wq2nsQbFKlcWR_tBxk8uNodipwPbw7N5Qxhca0u1523AmU74kEJV8mXErjbbkvjRQ69Rh7vZQ9JEusQq2TnyoBkvRbqX8m6VOLYTKYozUbs5vEUt7Rn9bAWAAEXmM3p1FMyv0mlQ6dOnHI_tSFbpijL9FRoTIS8hHchmaAExMFpnxLQ-PxPzMTzlfyUv1PsdFQFb58uIPVqgIasb7XbfrsM70HEiLDSU3g418BwkdcPgDA08JguibIJS6rwEgG_r_LeCEHGOq6PJyXq51XVtZn6M3Ug81WhENnObHbA";
const refresh_token_RHSSO = "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI3OTBjYTI5YS1jMjg3LTQ5ZGQtOWZmOC1mZDhlNjlmN2I2MDcifQ.eyJleHAiOjE3MDEwOTY5OTgsImlhdCI6MTcwMTA5NTE5OCwianRpIjoiOGE5NjdhMzktYjU1OC00OGRkLTg4YjctNzY0ZDNjNWMxNjY2IiwiaXNzIjoiaHR0cHM6Ly9pZHAtc2lzYnItdGkuaG9tb2xvZ2FjYW8uY29tLmJyL2F1dGgvcmVhbG1zL3Npc2JyIiwiYXVkIjoiaHR0cHM6Ly9pZHAtc2lzYnItdGkuaG9tb2xvZ2FjYW8uY29tLmJyL2F1dGgvcmVhbG1zL3Npc2JyIiwic3ViIjoiMmNlN2M5N2UtOGFmNy00ODlmLWEyOTgtOWQzZTNkOTMwOGM2IiwidHlwIjoiUmVmcmVzaCIsImF6cCI6InNpc2JyMy1mcm9udGVuZCIsInNlc3Npb25fc3RhdGUiOiJjNTFjMzRmMC05ZTM0LTQ5ZTAtYjg0Ny05MDA0NzgxZTk3ZWEiLCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiYzUxYzM0ZjAtOWUzNC00OWUwLWI4NDctOTAwNDc4MWU5N2VhIn0.0DJi13kb0u7JUOrwhe_dKBjT83M1biNQhM_gr_5-nvM";

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  const urlsAllowed = ['/token', '/cas/auth/token', '/cas/login', '/revoke', '/cas/logout',
                      '/cas/auth', '/certs',  '/permissoes'];
  const allowed = urlsAllowed.filter(i => req.url.includes(i)).length > 0;

  if(! allowed) {
    var authHeader = req.headers.authorization;
    if(! authHeader) {
        return res.status(401).json({ error: 'Nao autorizado! (Você deve informar um header Authorization!)' });
    }

    if(authHeader != `Bearer ${accessToken}` && authHeader != `Bearer ${JWT_AcessToken_RHSSO}`) {
      return res.status(401).json({ error: `Nao autorizado! (Você deve informar Bearer com o accessToken '${accessToken}'!)` });
    }
  }
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  next();
});

/*
 * Passo 1:
 * Recupera dados e permissões do usuário
 */
server.post('/cas/auth/token', (req, res) => {
  res.jsonp(
    {
      token: JWT,
      ticket: req.body.ticket
    }
  );
});


/*
 * Passo 2:
 *  Recupera o acess token para requisições no API manager.
 */
server.post('/token', (req, res) => {
    var authHeader = req.headers.authorization;


  if (authHeader) { // Tokens CAS precisam de Authorization nas requests
    if(! authHeader.startsWith("Basic")) {
        return res.status(401).json({ error: 'Nao autorizado! (Você deve informar basic com o base64(clientId:ClientSecrete)!)' });
    }

    if(req.body.grant_type == "st" ) {
        if(! req.body.ST ) {
            return res.status(400).json({ error: 'Session Token invalido!' });
        }
        if(! req.body.service ) {
            return res.status(400).json({ error: 'Servico invalido!' });
        }

        return res.jsonp({
            "access_token": accessToken,
            "refresh_token": refreshToken,
            "scope": "openid",
            "id_token": JWT,
            "token_type": "Bearer",
            "expires_in": 3600
        });
    }

    if(req.body.grant_type == "refresh_token" ) {
        if(req.body.refresh_token != refreshToken ) {
          return res.status(400).json({ error: 'refresh_token invalido! (Utilize o refresh_token recebido ao buscar o access token original.)' });
        }

        return res.jsonp({
          "access_token": accessToken,
          "refresh_token": refreshToken,
          "scope": "openid",
          "id_token": JWT,
          "token_type": "Bearer",
          "expires_in": 3600
      });
    }

    return res.status(400).json({ error: 'Grant type invalido! (Utilize st ou refresh_token)' });
  }

  /** Recupera o refresh token do JWT do RHSSO */

  if(req.body.grant_type == "refresh_token" ) {
    if(req.body.refresh_token != refresh_token_RHSSO ) {
      return res.status(400).json({ error: 'refresh_token invalido! (Utilize o refresh_token recebido ao buscar o access token original.)' });
    }

    return res.jsonp({
      "access_token": JWT_AcessToken_RHSSO,
      "refresh_token": refresh_token_RHSSO,
      "scope": "openid",
      "id_token": id_token_RHSSO,
      "token_type": "Bearer",
      "refresh_expires_in": 1800,
      "expires_in": 3600
    });
  }

  return res.status(400).json({ error: 'Grant type invalido! (Utilize refresh_token)' });
});

/*
 * Passo 3:
 *  Recupera recupera a foto do usuário
 */
server.get(['/rhs/api/successfactors/v1/fotos/:cpf/:numeroCooperativa/perfil', '/rhs/successfactors/v2/fotos/:cpf/:numeroCooperativa/perfil'], (req, res) => {
    res.jsonp({"resultado":
      {
        "foto": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJycfLT0tMTU3Ojo6Iys/QEE/QCo/QT8BCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc1NTcyNzc3Nzc3Nzc3NzU1NzU3LS83KzU1LS01Nf/AABEIACgAKAMBIgACEQEDEQH/xAAbAAADAQADAQAAAAAAAAAAAAAABQYEAQMHAv/EAC8QAAIBAwMCBAUDBQAAAAAAAAECAwAEBRESMSFBBhNRYRQycYHBUpGhByIjJEL/xAAYAQADAQEAAAAAAAAAAAAAAAADBAUCBv/EACERAAICAQMFAQAAAAAAAAAAAAECABEhAxIxBBMiUbEF/9oADAMBAAIRAxEAPwBPZ+IJZLhmR9VLBSf069dBVPjMvJeyiADo52Ivr069akf6XYqK8lu5buIyw2oDFG4Lnj+OavbC+waXJs8XbW8rMwVpIJA5Rj2PcVLdc4ljSI22Z8z2VhIHTykOwEqw4JrDcXkUKgWsIQhux57VtyN5j8ZeNYvLKs8vUBoy5Y+utL7yyJinEL75GGqAjSsCxDEKRJbxVcxzyfFQptG0CRfzXNIsjfSQBzIAApI2sOx5FcU0qkiT3YAz2XFYm3xfiLJeWqJb3ao6x9uCG0+9MbaPEDJPDahGnTR2baAqHsNdOfasueubbz4LRpf9l1YhFOjBdNeex76e1K7fEPbYj4ZzFc28ztIHuGMco69CSP8Ar36VL/M1W1elRm5r5iNIAwwZsv7LGZLLSwZFIpHm3eSXXcCRyNfXTtWO5xVhgYX+C3lj101/tB9gSdKUHESwWk1pi40gckT/ABMl2ZXVxwSQPtp710tfvFjnvcpOHMUZaTaNFJA7d6db1CUAbk94rxAvLOO7LKs11c7vQLGo6lj9dKKXPlZMtFC+XmTyRF/hCJtXaT6Dkg8/SijqGqokX02Nyg8QPcXYe8SUreROt0kg53Kev201GlXaeI7fE2vk5aMONA8U23VXU8fQ0UUtp4wIr0DnY1xPk/GGPlhaPGwqJG+ZtNAo9SfxUheY+bxDjrweaYY/mRiOjbep/fiiiiHxyJRHng8TNZ2MTYiwjuV3JHHseMdOunzA8g0UUVnusODOe3sCaM//2Q=="
      }
    });

});

/*
 * Redireciona em caso de atualização
 */
server.get('/cas/login', (req, res) => {
  res.redirect('http://localhost:4200?ticket=ST1-EwTccaaq-localhost');
});

/*
 * Revoke login
 */
server.post('/revoke', (req, res) => {
  res.jsonp({"resultado":
      {

      }
    });
});

/*
 * Revoke login
 */
server.get('/cas/logout', (req, res) => {
  res.jsonp({"resultado":
      {
        response: "Logout realizado em mock"
      }
    });
});

/**
 * Legado
 *  Recupera as informações do usuário logado.
 */
server.get('/permissao/1.0.0/autorizacao/usuarios', (req, res) => {

  res.jsonp({
      "resultado": {
          "login": "gearqc0300_00",
          "nome": "USUARIO CORPORATIVO DA GEARQ",
          "cpf": "62663522732",
          "email": "gearqc@sicoob.com.br",
          "numeroCooperativa": 300,
          "idInstituicaoOrigem": 2,
          "idUnidadeInstOrigem": 0,
          "dataHoraUltimoLogin": Date.now() - 1000
      }
  });

});

/**
 *  Recupera as situação da estacao de trabalho
 */
server.post('/estacao-trabalho', (req, res) => {

  res.jsonp({
    "resultado": {
      "ativo": false,
      "mensagem": "Estação de trabalho está pendente de aprovação."
    }
  });

});


/** Mock requests RHSSO IDP */

/*
 * Passo 1:
 *  Recupera o acess token para requisições do IPD RHSSO.
 */
server.post('/cas/token', (req, res) => {

    if(req.body.grant_type == "authorization_code" ) {
      if(req.body.code != code ) {
        return res.status(400).json({ error: 'code invalido! (Utilize o code recebido ao buscar o access token original.)' });
      }

      return res.jsonp({
        "access_token": JWT_AcessToken_RHSSO,
        "refresh_token": refresh_token_RHSSO,
        "scope": "openid",
        "id_token": id_token_RHSSO,
        "token_type": "Bearer",
        "refresh_expires_in": 1800,
        "expires_in": 3600
    });
  }

    return res.status(400).json({ error: 'Grant type invalido! (Utilize authorization_code)' });
});

/*
 * Passo 2:
 * Recupera o certificado para validar a assinatura do chave
 */
server.get('/protocol/openid-connect/certs', (req, res) => {
  res.jsonp({
        "keys": [
          {
              "kid": "L-6t-j26-0C7zU85JmgrP3Tgj1cUQIdQkB3rdT5ZJEg",
              "kty": "RSA",
              "alg": "RS256",
              "use": "sig",
              "n": "kXOqL_ZdSj2SkCOTWZyqpcBsGTr6VvfWixNAW5ewSe_i2ZDoWepwun7Y6UlP2j9UTeipS4qKMQm1b4QpynDXbA0ZKHvO-MIJ_tV-9z-4ic0Ew44lxZ9mEOt9uZEYQDeNXEDE8oioAbq6PMp4-FfonTsOFstx2JUT_8jvBf3e1DaNSIKcPtGWsmSMwepJ8JRr5dWUuUFcXHjuRgt6AiVTcr5_NIF5Mq4PnHF0Uh20nbKogZWjQCcn-CJumfVLuLbnhEKs_RfXJ09YKjm53Te9Yd4Rj8T2h-dPmegdwu3nHONSk5_v_fN-BwPeP9C74lEEDv2h_p8EELoEogD9YPenSQ",
              "e": "AQAB",
              "x5c": [
                  "MIICmTCCAYECBgGHTOXHbTANBgkqhkiG9w0BAQsFADAQMQ4wDAYDVQQDDAVzaXNicjAeFw0yMzA0MDQxNTMwMzlaFw0zMzA0MDQxNTMyMTlaMBAxDjAMBgNVBAMMBXNpc2JyMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkXOqL/ZdSj2SkCOTWZyqpcBsGTr6VvfWixNAW5ewSe/i2ZDoWepwun7Y6UlP2j9UTeipS4qKMQm1b4QpynDXbA0ZKHvO+MIJ/tV+9z+4ic0Ew44lxZ9mEOt9uZEYQDeNXEDE8oioAbq6PMp4+FfonTsOFstx2JUT/8jvBf3e1DaNSIKcPtGWsmSMwepJ8JRr5dWUuUFcXHjuRgt6AiVTcr5/NIF5Mq4PnHF0Uh20nbKogZWjQCcn+CJumfVLuLbnhEKs/RfXJ09YKjm53Te9Yd4Rj8T2h+dPmegdwu3nHONSk5/v/fN+BwPeP9C74lEEDv2h/p8EELoEogD9YPenSQIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQBLJHnxxPCvVQ8GMni0ZbFQQHzcHh4ckHoUnkyK9FUDVZDI9tObAJ7Y1KuhN4WRLMJRlezKPdyXvJb7b5DbNDwKPxuScbXNMUlcj8nYpa93Vgus/SK28KTC3mTfVMQ5z3hAC2Rw9Veg+X0m6pLw1QP56Y9ZwFat3zIiO/QYbz0RKZLkT6rb2PaKdaZQ7TMdymMBESt8xlEjdW+VVa6blkNTJWyOX0MBce+M64dXwZB/PHcbbAxmxTbOcjIl4h5pHs2NXgCvQQivjFAHgzjkn3i7dZ1QTbUYU7h+j1G8F6nprzccbd7yPz3HiztNELscjutYRsWHZxyvrp0HPgXwMfM+"
              ],
              "x5t": "wA7vGZmE7NlPQx_zPQEFhWfrb5Y",
              "x5t#S256": "qnpJqJEipmIgJNGTwfJubJEovhLljVp4foO5WmXpMD0"
          },
          {
              "kid": "ZqPnHoWf7Vodq4KEiASKKH_0X4O5SsnZpQCUqQZaGBI",
              "kty": "RSA",
              "alg": "RSA-OAEP",
              "use": "enc",
              "n": "i6QP21l1i7iKm3ZgOa27CqTJ2CKyVhL7OBkWSNGhQyn66WgtWahdNY_osOebHb94iiGGzY_kyHa9e9qmiyBDM_g07BPxNXLmKplb3tvKgFS2vri0ltz23xyyu2AY69TKEKfR43LbA3AdsjWUAJ0d71pah6B8uF6rWVHmGNkx0LpO82xAJkvWu75Md-NqJ0NojcYs77tjcIHkv-NWpfe4NTQpzKxj7ox6J5GDppcGiaVaC5gYG-0grNvPznfxvB8tz1ApRifaipOd_gibmBC4quqY4ANt1Y1rYn61tJ3evp6BvulxZpxXoVeopR5Wf1ieLQ3Ytr2i1ToVxzQA9YUnFQ",
              "e": "AQAB",
              "x5c": [
                  "MIICmTCCAYECBgGHTOXIijANBgkqhkiG9w0BAQsFADAQMQ4wDAYDVQQDDAVzaXNicjAeFw0yMzA0MDQxNTMwNDBaFw0zMzA0MDQxNTMyMjBaMBAxDjAMBgNVBAMMBXNpc2JyMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAi6QP21l1i7iKm3ZgOa27CqTJ2CKyVhL7OBkWSNGhQyn66WgtWahdNY/osOebHb94iiGGzY/kyHa9e9qmiyBDM/g07BPxNXLmKplb3tvKgFS2vri0ltz23xyyu2AY69TKEKfR43LbA3AdsjWUAJ0d71pah6B8uF6rWVHmGNkx0LpO82xAJkvWu75Md+NqJ0NojcYs77tjcIHkv+NWpfe4NTQpzKxj7ox6J5GDppcGiaVaC5gYG+0grNvPznfxvB8tz1ApRifaipOd/gibmBC4quqY4ANt1Y1rYn61tJ3evp6BvulxZpxXoVeopR5Wf1ieLQ3Ytr2i1ToVxzQA9YUnFQIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQAsah5tCDV+ZOuqJUZs0QsgWtqw8irNe9dF0Q4xyC/rXEKRWT1zQV/fFhxJiXKNSOGdMbxK5/5G3DJvhQ7ZVpIVUW8zSQd2h13B7w82uqZVOqa1IotLe9UmnOVshgQNcODWxK2Sdqs0YdQmrsXkWVsmmrauyqOgCXpWU9T/2zebKrpo5HRJdma5D1R7lEzaC/Pvl8r+748cLEBTuZNOeXuCXazkUiUzRFLQ+eFI+jAgeq8A7oiFGFej8guKWFoHVvGVIBqweB2V69r1cOafBzWrhXCKKvn5oCzibujxIkRPZuorywWeWQlgKmCxGbgFx2N3L7ozwsvwWkva9ZoSIIYx"
              ],
              "x5t": "WoRDqEcvb8DI1xwMCiBYy4LcF1M",
              "x5t#S256": "mw3Dj4yEmpgR9ywgcEZR-uVI-dVlZR2x8VY4DKrYgzI"
          }
      ]
    }
  );
});

/*
 * Passo 5:
 *  Recupera recupera os relatórios
 */
server.get('/rel/api/relatorios', (req, res) => {
  res.jsonp({"resultado": [] });
});


/*
 * Passo 6
 * Redireciona em caso de atualização
 */
server.get('/cas/auth', (req, res) => {
  res.redirect(`${req.query.redirect_uri}?code=`+ code);
});

/*
* Recupera a avaliação do aplicativo
*/
server.get(['/avaliacao-aplicativos-sisbr/v1/avaliacao/vigentes-instituicao/:idInstituicao', '/avaliacao-aplicativos-sisbr/v2/avaliacao/vigentes-instituicao/:idInstituicao'], (req, res) => {
  res.jsonp({
      "resultado": {
        qtdDiasAvatar: 10,
        vigentes: [
          {
            idavaliacaoaplicativo: 2,
            datahorafimvigencia: new Date(Date.now() + 1000*60*60*24).getTime(),
            datahorainiciovigencia: new Date(Date.now() - 1000*60*60*24).getTime(),
            descagradecimento: 'agradecimento',
            descavaliacaoaplicativo: 'descavaliacaoaplicativo',
            idsequencialmodulo: 1,
            idtipoavaliacaoaplicativo: 1,
            nomeformulario: undefined,
            nometituloavaliacaoaplicativo: 'nometituloavaliacaoaplicativo',
          }
        ]
      }
  });

});

/*
* Consulta a avaliação do aplicativo pelo usuário
*/
server.post(['/avaliacao-aplicativos-sisbr/v1/voto-avaliacao/consultar', '/avaliacao-aplicativos-sisbr/v2/voto-avaliacao/consultar'], (req, res) => {
  res.jsonp({
    "resultado": [{}]
  });
});


/**
 *  Recupera as informações do usuário logado.
 */
server.get('/permissao/v2/autorizacao/usuarios/permissoes', (req, res) => {

  res.jsonp({
      "resultado": {
        "usuario":{
          "login": "gearqc0300_00",
          "nome": "USUARIO CORPORATIVO DA GEARQ",
          "cpf": "62663522732",
          "email": "gearqc@sicoob.com.br",
          "numeroCooperativa": 300,
          "idInstituicaoOrigem": 2,
          "idUnidadeInstOrigem": 0,
          "dataHoraUltimoLogin": Date.now() - 1000,
          "permissoes": {
            "sistemas": [
                {
                    "id": 2479,
                    "nome": "PORTAL SISBR 3.0",
                    "sigla": "PORTAL SISBR 3.0",
                    "modulos": [
                        {
                            "id": 2509,
                            "nome": "PORTAL SISBR 3.0",
                            "formulario": "MDIPORTALSISBR3",
                            "tipo": "PORTAL",
                            "objetos": [
                                {
                                    "nome": "HOME",
                                    "tipo": "MENU",
                                    "descricao": "HOME",
                                    "label": "HOME",
                                    "caminho": "/",
                                    "ordem": 1
                                },
                                {
                                  "nome": "AMOSTRA",
                                  "tipo": "MENU",
                                  "descricao": "AMOSTRA",
                                  "label": "AMOSTRA",
                                  "caminho": "/amostra",
                                  "ordem": 1
                              },
                              {
                                "nome": "USUARIO",
                                "tipo": "MENU",
                                "descricao": "USUARIO",
                                "label": "USUÁRIO",
                                "caminho": "/usuario",
                                "ordem": 1
                            }
                            ]
                        }
                    ]
                }
            ]
        }
      }
      }
  });

});

server.use(router);
server.listen(3000, () => {
  console.log('Json Server -> Sicoob Mock com está rodando na porta 3000!')
})
