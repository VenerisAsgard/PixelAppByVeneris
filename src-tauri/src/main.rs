#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
extern crate image;
use std::fs::File;
use image::imageops::FilterType;
use image::ImageFormat;

#[tauri::command]
fn app_should_close() {
  std::process::exit(0);
}

#[tauri::command]
fn save_image(colors: Vec<Vec<u8>>, text: &str) {
    
    let width = 25;
    let height = 25;
    let mut counter = 0;
    
    
    
    let mut imgbuf = image::ImageBuffer::new(width, height);

    for (_x, _y, pixel) in imgbuf.enumerate_pixels_mut() {
        let rgb = &colors[counter];
        counter += 1;
        *pixel = image::Rgb([rgb[0], rgb[1], rgb[2]]);
    }
    
    imgbuf.save(format!("{}.png", text)).unwrap();
    
    
    let tiny = image::open(format!("{}.png", text)).unwrap();
    for &(_name, filter) in [("big", FilterType::Nearest)].iter(){
        let scaled = tiny.resize(2500, 2500, filter);
        let mut output = File::create(&format!("{}.png", text)).unwrap();
        scaled.write_to(&mut output, ImageFormat::Png).unwrap();
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![app_should_close, save_image])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
