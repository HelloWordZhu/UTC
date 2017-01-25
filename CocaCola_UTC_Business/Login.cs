using CocaCola_UTC_Utility;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace CocaCola_UTC_Business
{
   public  class Login
    {
        public static string ValidateLogin(HttpContext context)
        {
            string MainStr = Common.FormatInput(context.Request["MainStr"]);
            JArray ja = (JArray)JsonConvert.DeserializeObject(MainStr);
            string UserAccount = ja[0]["UserAccount"].AsString();
            string PassWord = GetMd5.GetMD5Hash(ja[0]["PassWord"].AsString());

            SqlParameter[] pas = new SqlParameter[]
                {
                    new SqlParameter("@UserAccount", UserAccount )
                };
            string sql = "select * from [dbo].[Tb_User] where UserAccount=@UserAccount";
            DataTable dt = DbHelper.GetTable(sql, pas);
            if (dt.Rows.Count > 0)
            {
                string UserPassword = dt.Rows[0]["UserPassword"].ToString();
                string IsFirstLogin = dt.Rows[0]["IsFirstLogin"].ToString();
                if (PassWord == UserPassword)
                {
                    context.Session.Add("IsFirstLogin", IsFirstLogin);
                    string sql_setStatus = "update Tb_User set UserLastLoginTime=getdate() where UserAccount='Admin'";
                    int rows = DbHelper.ExcuteSQL(sql_setStatus);
                    return "登入成功@succeful";
                }
                else
                {
                    return "密码错误,请重新输入密码@fail";
                }
            }
            else
            {
                return "账号不存在,请重新输入账号@fail";
            }
        }

        public static string SaveNewPassword(HttpContext context)
        {
            string MainStr = Common.FormatInput(context.Request["MainStr"]);
            JArray ja = (JArray)JsonConvert.DeserializeObject(MainStr);
            string NewPassword = GetMd5.GetMD5Hash(ja[0]["NewPassword"].AsString());
            SqlParameter[] pas = new SqlParameter[]
            {
                new SqlParameter("@NewPassword", NewPassword ),
            };
            string sql = "update Tb_User set UserPassword=@NewPassword,IsFirstLogin=1 where UserAccount='Admin'";
            int rows = DbHelper.ExcuteSQL(sql, pas);
            if (rows > 0)
            {
                return "设置成功@succeful";
            }
            else
            {
                return "设置失败,请联系技术人员@fail";
            }
        }
    }
}
