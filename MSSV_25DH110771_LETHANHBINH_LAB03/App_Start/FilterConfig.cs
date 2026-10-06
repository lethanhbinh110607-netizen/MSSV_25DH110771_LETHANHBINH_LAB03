using System.Web;
using System.Web.Mvc;

namespace MSSV_25DH110771_LETHANHBINH_LAB03
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
