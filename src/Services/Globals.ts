abstract class Globals {

}

class DevelopmentGlobals extends Globals {
    public usersUrl = "http://localhost:3001/api/vacations/";
    public registerUrl = "http://localhost:3001/api/auth/register/";
    public loginUrl = "http://localhost:3001/api/auth/login/";
}

class ProductionGlobals extends Globals {
    public vacationsUrl = "";
    public registerUrl = "";
    public loginUrl = "";
}

const globals = process.env.NODE_ENV === "production" ? new ProductionGlobals() : new DevelopmentGlobals();

export default globals;