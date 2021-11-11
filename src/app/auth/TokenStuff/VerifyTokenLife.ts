/*  


isTokenAlive() {
        if (this.localStr.get("token") != null) {
            this.loginService.verifyToken(this.localStr.get("token")).subscribe(
                (response: boolean) => {
                    if (response) {
                        this.router.navigate(['/acceuil'], { queryParams: {} });
                    }
                    else {
                        this.localStr.remove("token");
                        this.localStr.remove("UCIN");
                    }
                }
            )
        } else {
            this.router.navigate(['/login'], { queryParams: {} });
        }
    }
    
    
    */
