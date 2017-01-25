using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace CocaCola_UTC_Utility
{
    public class GetMd5
    {
        public static string GetMD5Hash(string input)
        {
            try
            {
                MD5 md5 = new MD5CryptoServiceProvider();
                byte[] res = md5.ComputeHash(Encoding.Default.GetBytes(input), 0, input.Length);
                byte[] temp = new byte[res.Length];
                System.Array.Copy(res, temp, res.Length);
                StringBuilder bui = new StringBuilder();
                foreach (byte b in temp)
                {
                    bui.AppendFormat("{0:X2}", b);
                }
                return bui.ToString();
            }
            catch
            {
                return "y001" + input;
            }

        }
    }
}
