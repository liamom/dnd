using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DND.Startup))]
namespace DND
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
