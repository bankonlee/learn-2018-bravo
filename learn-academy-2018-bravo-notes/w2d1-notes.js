/*

-----------------------------How The Internet Works---------------------------

*Client means a users browser
*Http = Hyper Text Transfer Protocol | Is a method to move html around the web
*ISP = Internet Service Provider
*IP Address = Internet Protocol Address
*DNS = Domain Name Service | Domain Name ---> IP Address
*TLD = Top Level Domain (Domain name extension)
*DDoS = Distributed Denial of Service Attack
*www.domain.me [.me] = TLD
*www.domain.me [domain] = Domain Name
*www.domain.me [www.] = Sub Domain
*www.domain.me/hello [/hello] = Internal Server File Directory
*Response = Sucess or Fail

-Http Request Process Flow
Client ---> Enter URL ---> Initiates request ---> Router ---> ISP --->
DNS ---> Server IP ---> Internal Server Router ---> Response (Status Code)

*CRUD = Create, Read, Update, Destroy
*Http verbs are request methods

-Request = Verbs
Create = "Post"
Read = "Get"
Update = "Patch/Put"
Destroy = "Delete"

*Status Codes are server responses ranging from 100-599

-Status Codes
1xx = Informational
2xx = Success
3xx = Redirect
4xx = Client
5xx = Server

-Restful Routes
Index = "Get" = /photos
New = "Get" = /photos/new
Create = "Post" = /photos
Show = "Get" = /photos/:id
Edit = "Get" = /photos/:id/edit
Update = "Patch/Put" = /photos/:id
Destroy = "Delete" = /photos/:id

*/
