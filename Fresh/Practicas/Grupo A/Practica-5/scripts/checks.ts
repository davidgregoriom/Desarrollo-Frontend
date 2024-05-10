function validateEmail(email:string):boolean{
    const re = /\S+@\S+\.\S+/;
    return re.test(email); // https://developer.mozilla.org/en-US/docs/Web/EXSLT/regexp/test
}
function validateTitle(title:string):boolean{
    title = title.trim();  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/trim
    const expresion= /^(\S+\s){4}\S+$/

    return expresion.test(title);
}
function validateText(text:string):boolean{
    return text.length>1;

}
function validatePassword(password:string):boolean{
    return password.length>6;
}

export function checknewEmail(message:FormData){
    try{
        if(message===null || message===undefined){
            throw new Error("Mensaje vacio");
        }else{
            const email:string = message.get("email");
            const title:string = message.get("title");
            const text:string = message.get("text");
            const date:Date = new Date();
            if(!validateEmail(email)){
                throw new Error("Email no valido");
            }
            if(!validateTitle(title)){
                throw new Error("Titulo no valido");
            }
            if(!validateText(text)){
                throw new Error("Texto no valido");
            }
            const new_message = `{ email: ${email}, title ${title}, text: ${text}, date: ${date}}; path=/`
            return new_message;
        }


    }catch(e){
        console.log(e);
    }
}

export function checkUser(user:FormData){
    try{
        if(user===null || user===undefined){
            throw new Error("Usuario vacio");
        }else{
            const email:string = user.get("email");
            const password:string = user.get("password");
            if(!validateEmail(email)){
                throw new Error("Email no valido");
            }
            if(!validatePassword(password)){
                throw new Error("Password no valido");
            }
            const new_user = `{ email: ${email}, password ${password}}; path=/`
            return new_user;
        }

    }catch(e){
        console.log(e);
    }
}
