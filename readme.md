# Di Gi or Digital Agency Project

Welcome to the Di Gi or Digital Agency project repository. This document serves as a README file to provide an overview of the project's structure and setup.

https://fatcaf.github.io/di-gi/

## Project Overview

This project represents a Digital Agency website with HTML and SCSS styles. It follows the BEM (Block, Element, Modifier) methodology for structuring HTML components and uses SCSS to style the site. Here's an outline of the project's structure:

- **HTML Layout**: Follows the BEM methodology for structuring HTML components.
- **Styles**: Written in SCSS and compiled into CSS.

  - SCSS styles are located in the `scss` directory.
  - The `scss` directory contains two subdirectories:
    - `base`: Common styles and items used throughout the site, including:
      - `_reset.scss`
      - `_vars.scss`
      - `_base.scss`
      - `_button.scss`
      - `_separator.scss`
    - `blocks`: Styles for site sections, including:
      - `_intro.scss`
      - `_header.scss`
      - `_promo.scss`
      - `_services.scss`
      - `_projects.scss`
      - `_team.scss`
      - `_testimonial.scss`
      - `_footer.scss`
      - `main.scss`: General file that imports other style files and includes adaptive styles for the page.

- **Carousels**: Animated carousels are implemented using the `owl-carousel-js` library, which is located in a separate directory named `owlcarousel`. Custom styles for carousel elements are applied in the `owl.carousel.min.css` file under the comment `/* My own styles for carousel controls */`.

- **Images**: Image assets used on the site are located in the `images` directory. There are subdirectories within `images`, each corresponding to a specific block and sharing the same name.

- **JavaScript**: The JavaScript logic for animating the burger menu and integrating the `owlcarousel` plugin is implemented in the `script.js` file, located in the `js` directory.

## Usage

Here's how to get started with the project:

1. Clone the repository to your local machine.
2. Open the HTML files in your preferred web browser to view the site.
3. If you want to modify the styles, you can work with the SCSS files in the `scss` directory and compile them into CSS.

## Contributing

If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them.
4. Create a pull request with a clear description of the changes you've made.

## License

This project is open-source and available under the [MIT License](LICENSE).

Feel free to reach out if you have any questions or need further assistance!

Happy coding!
