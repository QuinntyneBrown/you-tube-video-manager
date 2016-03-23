using System;
using System.Net;
using System.Net.Http;
using System.Web.Http.Filters;
using Microsoft.Practices.Unity;
using Chloe.Server.Utils.Contracts;

namespace Chloe.Server.Attributes
{
    public class ChloeHandleErrorAttribute: ExceptionFilterAttribute
    {
        public ChloeHandleErrorAttribute(ILogger logger)
        {
            this.logger = logger;
        }

        public override void OnException(HttpActionExecutedContext context)
        {
            if (context.Exception is NotImplementedException)
            {
                logger.Log(context.Exception);
                context.Response = new HttpResponseMessage(HttpStatusCode.NotImplemented);
            }
        }

        [Dependency]
        internal Chloe.Server.Utils.Contracts.ILogger logger { get; set; }
    }
}


