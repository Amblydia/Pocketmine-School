---
title: Simple Form
sidebar_label: Simple Form
sidebar_position: 2
---

### Creating a form with a button without an icon:

```php
$form = new SimpleForm("This is the title");
$form->addButton(new Button("Say hi", null, function(Player $player) {
    $player->sendMessage("Hello!");
}));
$player->sendForm($form);
```

### Creating a form with a button with an icon:

```php
$form = new SimpleForm("This is the title");
$form->addButton(new Button("Press me!", new ButtonIcon("https://introduce-the-image-url.here"), function(Player $player) {
    $player->sendMessage("Hey! Thanks for pressing me :)");
}));
$player->sendForm($form);
```

### Creating a form with a header text (optional):

```php
new SimpleForm("This is the title", "This is the header text");
```

### Controlling what happens when a form closes (optional):

```php
$form->setCloseListener(function(Player $player) {
    echo "The form was closed!";
})
```