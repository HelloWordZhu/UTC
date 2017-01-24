using CocaCola_UTC_Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CocaCola_UTC_Web
{
    /// <summary>
    /// Summary description for LogicRoute
    /// </summary>
    public class LogicRoute : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/html";
            string Menthod = context.Request["Menthod"];
            string result = string.Empty;
            //context.Session["Code"] = "1";
            //context.Session["UserPosition"] = "10004";
            //context.Session["UserAdress"] = "成都";
            switch (Menthod)
            {
                //管理菜单显示
                case "GetLeftMenu":
                    result = Menu.GetLeftMenu(context);
                    break;
                case "GetLeftMenuTree":
                    result = Menu.GetLeftMenuTree(context);
                    break;
                //保存Probability数据
                case "SaveProbabilityData":
                    result = Probability.SaveProbabilityData(context);
                    break;

                case "GetProbabilityList":
                    result = Probability.GetProbabilityList(context);
                    break;
            }
            context.Response.Write(result);
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}