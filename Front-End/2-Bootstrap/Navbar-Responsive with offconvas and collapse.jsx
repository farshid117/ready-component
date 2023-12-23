export  const  NavbarCollapseResponsive = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-transparent">
            <div class="container-fluid container-lg">
                <a class="navbar-brand" href="#">
                    <span class="fw-bolder fs-3">Ali<span class="fw-bold text-primary">Coder</span><span
                        class="fs-5">.ir</span></span>
                </a>
                <button class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                    <span class="fw-bold"><i class="bi bi-list text-primary fs-1 fw-bold"></i></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav navbar-nav-scroll me-auto mb-2 mb-lg-0" style="--bs-scroll-height: 200px;">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">خانه</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                محصولات
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">محصول1</a></li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li><a class="dropdown-item" href="#">محصول2</a></li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li><a class="dropdown-item" href="#">محصول3</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">درباره ما</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link">تماس‌با‌ما</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="کلمه مورد نظر را بنویسید" aria-label="Search" />
                        <button class="btn btn-outline-success btn-sm" type="submit">پیدا‌کن</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export const  NavbarOffconvasResponsive = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-transparent">
            <a class="navbar-brand" href="#">
                <span class="fw-bolder fs-3">Ali<span class="fw-bold text-primary">Coder</span><span
                    class="fs-5">.ir</span></span>
            </a>
            <button class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                <span class="fw-bold"><i class="bi bi-list text-primary fs-1 fw-bold"></i></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav navbar-nav-scroll me-auto mb-2 mb-lg-0"
                        style="--bs-scroll-height: 200px;">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">خانه</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                محصولات
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">محصول1</a></li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li><a class="dropdown-item" href="#">محصول2</a></li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li><a class="dropdown-item" href="#">محصول3</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">درباره ما</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link">تماس‌با‌ما</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="کلمه مورد نظر را بنویسید" />
                        <button class="btn btn-outline-success btn-sm" type="submit">پیدا‌کن</button>
                    </form>
                </div>
            </div>
        </nav>
    )

}
