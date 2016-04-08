var API_PATH = "http://data.kaohsiung.gov.tw/Opendata/DownLoadSwitch.aspx?CaseNo1=AS&CaseNo2=2&Lang=C&FolderType="ㄤ
function getData(cb) 
{
  $.ajax
  (
    {
    url : API_PATH,
    method : "GET",
    success : function(data) 
    {
      cb(null, data);
    },
    error : function(err) 
    {
      cb(err);
    }
  });
  
}
