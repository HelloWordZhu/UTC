using CocaCola_UTC_Utility;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CocaCola_UTC_Business
{
   public class CommonSql
    {
        public static string AllowPagingSql(int start, int limit, string sql)
        {
            string result = string.Empty;
            int currpage = (start / limit) + 1;
            SqlParameter[] pas = new SqlParameter[]
            {
                    new SqlParameter("@currpage", currpage),
                    new SqlParameter("@limit", limit ),
                    new SqlParameter("@sql", sql.ToString() )
           };        
            string strSql = "exec les_AllowPaging @currpage,@limit,@sql";
            result = Common.DataSetToJson(DbHelper.GetDataSet(strSql, pas));
            return result;
        }
    }
}
