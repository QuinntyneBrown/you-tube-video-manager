using Chloe.Server.Utils.Contracts;
using System.Diagnostics;
using System.Web.Http.Filters;

namespace Chloe.Server.Attributes
{
    public class ChloeExecutionTimeFilterAttribute: ActionFilterAttribute
    {
        public ChloeExecutionTimeFilterAttribute(ILogger logger)
        {
            this.logger = logger;
        }

        public override void OnActionExecuting(System.Web.Http.Controllers.HttpActionContext actionContext)
        {
            base.OnActionExecuting(actionContext);
            actionContext.Request.Properties[actionContext.ActionDescriptor.ActionName] = Stopwatch.StartNew();
        }

        public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {
            base.OnActionExecuted(actionExecutedContext);
            Stopwatch stopwatch = (Stopwatch)actionExecutedContext.Request.Properties[actionExecutedContext.ActionContext.ActionDescriptor.ActionName];
            logger.Log(actionExecutedContext.ActionContext.ActionDescriptor.ActionName + "-Elapsed = " + stopwatch.Elapsed);
        }

        protected readonly ILogger logger;
    }
}