import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setCurrenPage } from "../Redux/stored_reducer";
import Search from "../Search/Search";
import { MenuData } from "./MenuData";

const MenuLink = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  console.log(MenuData.path);
  return (
    <div className="menu">
      <div class="menu-items flex">
        {MenuData.map((page, i) => {
          page?.path === pathname && dispatch(setCurrenPage(page));
          return (
            <ul>
              <li className="mr-6 text-sm	font-medium">
                <Link
                  to={page.path}
                  className={`nav-link  ${
                    pathname === page.name ? "active-link" : ""
                  }`}
                >
                  {page?.name}
                </Link>
                {page?.extra && (
                  <span className="ml-2 number-extra">{page.extra}</span>
                )}
              </li>
            </ul>
          );
        })}
      </div>
      <hr />
      <Search />
    </div>
  );
};

export default MenuLink;
