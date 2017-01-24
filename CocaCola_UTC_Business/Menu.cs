using CocaCola_UTC_Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace CocaCola_UTC_Business
{
    public class Menu
    {
        /// <summary>    
        /// 获取左边风琴式菜单
        /// </summary>  
        public static string GetLeftMenu(HttpContext context)
        {
            string result = string.Empty;
            string sql = string.Empty;
            sql = "select ID,MenuName from TB_LeftMenu  where Flag='1' order by orderbyindex";
            result = Common.DataTableToJson(DbHelper.GetTable(sql));
            return result;
        }
        /// <summary>    
        /// 获取左边功能菜单
        /// </summary>  
        public static string GetLeftMenuTree(HttpContext context)
        {
            string result = string.Empty;
            string sql = string.Empty;
            string TreeType = context.Request["TreeType"];
            sql = "select b.id,b.[text],'true' as leaf,b.src as hrefTarget from TB_Menu b  where   b.flag='1' and b.type='" + TreeType + "' order by b.orderbyvalue";
            result = Common.DataTableToJson(DbHelper.GetTable(sql));
            return result;
        }
    }
}
