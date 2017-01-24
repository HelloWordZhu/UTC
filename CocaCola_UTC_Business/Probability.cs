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
    public class Probability
    {
        public static string SaveProbabilityData(HttpContext context)
        {
            string MainStr = Common.FormatInput(context.Request["MainStr"]);
            JArray ja = (JArray)JsonConvert.DeserializeObject(MainStr);
            string ExecuteDate = ja[0]["ExecuteDate"].AsString();
            string YearProbability = ja[0]["YearProbability"].AsString();
            string YearCol = ja[0]["YearCol"].AsString();
            string MonthProbability = ja[0]["MonthProbability"].AsString();
            string MonthCol = ja[0]["MonthCol"].AsString();
            string WeekProbability = ja[0]["WeekProbability"].AsString();
            string WeekCol = ja[0]["WeekCol"].AsString();

            SqlParameter[] pas = new SqlParameter[]
                {
                    new SqlParameter("@ExecuteDate", ExecuteDate ),
                    new SqlParameter("@YearProbability", YearProbability ),
                    new SqlParameter("@YearCol", YearCol ),
                    new SqlParameter("@MonthProbability", MonthProbability ),
                    new SqlParameter("@MonthCol", MonthCol ),
                    new SqlParameter("@WeekProbability", WeekProbability ),
                    new SqlParameter("@WeekCol", WeekCol )
                };
            int rows = DbHelper.ExcuteProc("sp_InsertProbabilityData", pas);
            if (rows > 0)
            {
                return "添加成功";
            }
            else
            {
                return "添加失败";
            }
        }

        public static string GetProbabilityList(HttpContext context)
        {
            string result = string.Empty;
            int start = Convert.ToInt32(context.Request["start"]);
            int limit = Convert.ToInt32(context.Request["limit"]);
            string sql = "select * from v_Probability order by CreateTime desc";
            result = CommonSql.AllowPagingSql(start, limit, sql);
            return result;
        }
    }
}
