using System;
using System.Collections.Generic;
using Chloe.Server.Utils.Contracts;
using Microsoft.Practices.Unity;
using Microsoft.Practices.Unity.InterceptionExtension;

namespace Chloe.Server.Behaviors
{
    public class LoggingInterceptionBehavior: IInterceptionBehavior
    {
        [Dependency]
        public ILogger Logger { get; set; }

        public bool WillExecute
        {
            get
            {
                return true;
            }
        }

        public IEnumerable<Type> GetRequiredInterfaces()
        {
            return Type.EmptyTypes;
        }

        public IMethodReturn Invoke(IMethodInvocation input, GetNextInterceptionBehaviorDelegate getNext)
        {
            var result = getNext()(input, getNext);
            if (result.Exception != null)
            {
                WriteLog(String.Format(
                  "Method {0} threw exception {1}.",
                  input.MethodBase, result.Exception.Message));
            }

            return result;
        }

        private void WriteLog(string message)
        {

        }
    }
}