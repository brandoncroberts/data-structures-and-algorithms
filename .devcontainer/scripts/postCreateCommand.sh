#!/bin/zsh
## Remove all files within dotfiles
rm -f ~/.zshrc

# Move dotfiles and Brewfile
cp -r .devcontainer/dotfiles/. ~

# Set Homebrew to non-interactive mode
export NONINTERACTIVE=1
# Clone zsh plugins
git clone https://github.com/Aloxaf/fzf-tab ~/.zsh/fzf-tab

git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k

git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
~/.fzf/install --all

git clone https://github.com/zsh-users/zsh-autosuggestions ~/.zsh/zsh-autosuggestions

git clone --depth 1 -- https://github.com/marlonrichert/zsh-autocomplete.git ~/.zsh/zsh-autocomplete

git clone https://github.com/zdharma-continuum/fast-syntax-highlighting ~/.zsh/fast-syntax-highlighting

# Source the new .zshrc to apply changes
source ~/.zshrc

# Additional setup commands can be added here
echo "Development environment setup complete."
