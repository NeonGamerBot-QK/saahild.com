with import <nixpkgs> {};
stdenv.mkDerivation {
  name = "react-bootstrap-shell";
  buildInputs = with pkgs; [
    nodePackages.create-react-app
    nodejs
    yarn
  ];
}
