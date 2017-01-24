using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CocaCola_UTC_Utility
{
    public static class Common
    {
        /// <summary>
        /// 处理字符中包含的特殊符号
        /// </summary>
        /// <param name="s"></param>
        /// <returns></returns>
        public static string FormatInput(string s)
        {
            return ((s == null) ? "" : s.Trim().Replace("'", "''").Replace("<", "&lt;").Replace(">", "&gt;"));
        }
        /// <summary>
        /// DataTale转换为Json(Table无数据则返回空字符串)
        /// </summary>
        /// <param name="dt"></param>
        /// <returns></returns>
        public static string DataTableToJson(DataTable dt)
        {
            string result = string.Empty;
            if (dt.Rows.Count > 0)
            {
                result = JsonConvert.SerializeObject(dt, new DataTableConverter());
            }
            else
            {
                result = "";
            }
            return result;
        }
        /// <summary>
        ///  DataSet转换为Json(DataSet无数据则返回空字符串)
        /// </summary>
        /// <param name="ds"></param>
        /// <returns></returns>
        public static string DataSetToJson(DataSet ds)
        {
            string result = string.Empty;
            if (ds.Tables[0].Rows.Count > 0)
            {
                result = JsonHelper.ToJson(ds);
            }
            else
            {
                result = "";
            }
            return result;
        }
        /// <summary>
        /// 字符串替换双引号
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public static string AsString(this System.Object obj)
        {
            return obj != null ? obj.ToString().Trim().Replace("\"", "") : "";
        }

        public static ArrayList TORepeatArr(string[] arr)
        {
            ArrayList list = new ArrayList();
            for (int i = 0; i < arr.Length; i++)
            {
                if (arr[i].ToString() != "")
                {
                    if (!list.Contains(arr[i]))
                        list.Add(arr[i]);
                }
            }
            return list;
        }
    }
}
