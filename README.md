# Folder structure:
- assets:
    + images(1x,2x,3x)
    + fonts
- configs: error code and server config.
- stores: contain bussiness flow with screen (ex: LoginStore vs LoginView and Global store for all app).
- enums: contain enum in app (file enums) and another type.
- locales: contain localize app.
- models: contain model data.
- repositories: contain repository to call api
(Repository created follow by object, ex: UserRepository, ProductRepository).
- styles: contain common style for app.
- utils: contain utils for app. If don't know using what util, you maybe create your function
 in Utils file.
- vales: contain constant, value all app
- views: contain screen, devide folder by function in app(ex: login, profile, order ...)
- component: contain component common use many times in app, don't add component just using in one screen.
