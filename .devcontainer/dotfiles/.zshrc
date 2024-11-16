# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

# oh-my-zsh plugins
plugins=(git)

# User configuration
export EDITOR='code -w'

# Source fzf-tab

source ~/powerlevel10k/powerlevel10k.zsh-theme

source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh

source ~/.zsh/fast-syntax-highlighting/fast-syntax-highlighting.plugin.zsh

source ~/.zsh/zsh-autocomplete/zsh-autocomplete.plugin.zsh

source ~/.zsh/fzf-tab/fzf-tab.plugin.zsh

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
alias zshconfig="code ~/.zshrc"
alias ohmyzsh="code ~/.oh-my-zsh"

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
