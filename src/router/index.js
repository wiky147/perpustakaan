import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/dashboard";
import Book from "./views/book";
import BookAdd from "./views/book/create";
import Librarian from "./views/librarian";
import LibrarianAdd from "./views/librarian/create";
import Publisher from "./views/publisher";
import PublisherAdd from "./views/publisher/create";
import Student from "./views/student";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/buku",
      component: Book
    },
    {
      path: "/buku/add",
      component: BookAdd
    },
    {
      path: "/pustakawan",
      component: Librarian
    },
    {
      path: "/pustakawan/add",
      component: LibrarianAdd
    },
    {
      path: "/penerbit",
      component: Publisher
    },
    {
      path: "/penerbit/add",
      component: PublisherAdd
    },
    {
      path: "/siswa",
      component: Student
    }
  ]
});
