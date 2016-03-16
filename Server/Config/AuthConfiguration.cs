using Chloe.Server.Config.Contracts;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace Chloe.Server.Config
{
    public class AuthConfiguration : ConfigurationSection, IAuthConfiguration
    {
        [ConfigurationProperty("tokenPath", IsRequired = true)]
        public string TokenPath
        {
            get { return (string)this["tokenPath"]; }
            set { this["tokenPath"] = value; }
        }

        [ConfigurationProperty("expirationMinutes", IsRequired = true)]
        public int ExpirationMinutes
        {
            get { return (int)this["expirationMinutes"]; }
            set { this["expirationMinutes"] = value; }
        }

        [ConfigurationProperty("jwtKey")]
        public string JwtKey
        {
            get { return (string)this["jwtKey"]; }
            set { this["jwtKey"] = value; }
        }

        [ConfigurationProperty("jwtIssuer")]
        public string JwtIssuer
        {
            get { return (string)this["jwtIssuer"]; }
            set { this["jwtIssuer"] = value; }
        }

        [ConfigurationProperty("jwtAudience")]
        public string JwtAudience
        {
            get { return (string)this["jwtAudience"]; }
            set { this["jwtAudience"] = value; }
        }

        public static AuthConfiguration Config
        {
            get { return ConfigurationManager.GetSection("authConfiguration") as AuthConfiguration; }
        }
    }
}