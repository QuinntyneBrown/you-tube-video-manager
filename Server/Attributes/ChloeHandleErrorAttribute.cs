using Chloe.Server.Utils.Contracts;
using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Filters;
using Unity.WebApi;
using Chloe.Server;
using Microsoft.Owin;
using Owin;
using Microsoft.Practices.Unity;

namespace Chloe.Server.Attributes
{
    public class ChloeHandleErrorAttribute: ExceptionFilterAttribute
    {
        //https://github.com/damienbod/WebApi2AttributeFilters
        //http://damienbod.com/2014/01/04/web-api-2-using-actionfilterattribute-overrideactionfiltersattribute-and-ioc-injection/
        public ChloeHandleErrorAttribute()
        {

            
        }

        public override void OnException(HttpActionExecutedContext context)
        {
            if (context.Exception is NotImplementedException)
            {
                context.Response = new HttpResponseMessage(HttpStatusCode.NotImplemented);
            }
        }

        [Dependency]
        internal ILogger logger { get; set; }
    }
}